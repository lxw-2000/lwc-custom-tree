/**
 * @author  xuewen liu <1780870263@qq.com>
 * @date    2024-10-08
 */
import { LightningElement, api, track } from 'lwc';

export default class CustomTreeItem extends LightningElement {
    @api item;
    @api cascadeMode = false;
    @track iconName;

    get isLeaf() {
        return !this.item.items || this.item.items.length === 0;
    }

    connectedCallback() {
        this.iconName = this.item.expanded ? 'utility:chevrondown' : 'utility:chevronright';
    }

    toggleExpand() {
        if (!this.isLeaf) {
            requestAnimationFrame(() => {
                this.item = { ...this.item, expanded: !this.item.expanded };
                this.iconName = this.item.expanded ? 'utility:chevrondown' : 'utility:chevronright';
            });
        }
    }

    selectItem() {
        const event = new CustomEvent('itemselect', {
            detail: this.item
        });
        this.dispatchEvent(event);
    }

    handleItemSelect(event) {
        const selectedItem = event.detail;
        const itemSelectEvent = new CustomEvent('itemselect', {
            detail: selectedItem
        });
        this.dispatchEvent(itemSelectEvent);
    }

    handleCheckboxChange(event) {
        try {
            const isChecked = event.target.checked;
            const updatedItem = { ...this.item, checked: isChecked };
            
            if(this.cascadeMode) {
                updatedItem.items = this.updateChildCheckboxes(updatedItem.items, isChecked);
            }
    
            this.dispatchEvent(new CustomEvent('checkchanged', {
                detail: { item: updatedItem },
                bubbles: true,
                composed: true
            }));
        } catch (error) {
            console.error('Error in handleCheckboxChange:', error);
        }
    }

    updateChildCheckboxes(items, isChecked) {
        if (items && items.length > 0) {
            return items.map(child => {
                const updatedChild = { ...child };
                
                updatedChild.checked = isChecked;
    
                if (updatedChild.items) {
                    updatedChild.items = this.updateChildCheckboxes(updatedChild.items, isChecked);
                }
                return updatedChild;
            });
        }
        return [];
    }

    @api
    findElementByKey(key) {
        if (this.item.key === key) {
            return this.template.querySelector(`[data-key="${key}"]`);
        }
        if (this.item.items) {
            for (let child of this.item.items) {
                const childComponent = this.template.querySelector(`[data-key="${child.key}"]`);
                if (childComponent) {
                    const found = childComponent.findElementByKey(key);
                    if (found) {
                        return found;
                    }
                }
            }
        }
        return null;
    }
}