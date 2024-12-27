/**
 * @author  xuewen liu <1780870263@qq.com>
 * @date    2024-10-08
 */
import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import items from './testTreeData';

export default class CustomTree extends LightningElement {
    @api title;
    @api items = items ?? [];
    @api cascadeMode = false;

    searchText;
    searchAnchor = [];

    handleSearchChange(event) {
        this.searchText = event.target.value;
    }

    get isLoadItems() {
        return this.items && this.items.length > 0;
    }

    findItemByLabel(items, label) {
        for (let item of items) {
            if (item.label.toLowerCase().includes(label.toLowerCase())) {
                return item;
            }
            if (item.items && item.items.length > 0) {
                const found = this.findItemByLabel(item.items, label);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({title, message, variant});
        this.dispatchEvent(event);
    }

    connectedCallback() {
        this.initializeData();
        window.addEventListener('scroll', this.handleScroll);
    }

    initializeData() {
        if (Array.isArray(this.items) && this.items.length > 0) {
            this.items = [...this.assignUniqueKeys(this.items)];
        }
    }

    handleCascadeModeChange(event) {
        this.cascadeMode = event.detail.checked;
    }

    handleItemSelect(event) {
        const selectedItem = event.detail;
    }

    handleCheckChanged(event) {
        try {
            const updatedItem = event.detail.item;
            
            if (!updatedItem || !updatedItem.key) {
                console.error('Updated item is invalid:', updatedItem);
                return;
            }
    
            this.items = this.subTreeReplace([...this.items], updatedItem);
        } catch (error) {
            console.error('Error in handleCheckChanged:', error);
        }
    }
    
    subTreeReplace(items, updatedItem) {
        if (!Array.isArray(items) || items.length === 0) {
            return [];
        }
    
        return items.map(item => {
            if (!item || !item.key) {
                console.error('Item is invalid:', item);
                return item;
            }
    
            if (item.key === updatedItem.key) {
                return updatedItem;
            } else if (item.items && Array.isArray(item.items)) {
                return { ...item, items: this.subTreeReplace(item.items, updatedItem) };
            }
            return item;
        });
    }
    
    expandAll() {
        if (this.items.length === 0) {
            this.showToast('Error', 'No items to expand.', 'error');
            return;
        }
        this.items = this.updateTreeItems(this.items, true);
        this.notifyParent();
    }

    collapseAll() {
        if (this.items.length === 0) {
            this.showToast('Error', 'No items to collapse.', 'error');
            return;
        }
        this.items = this.updateTreeItems(this.items, false);
        this.notifyParent();
    }

    updateTreeItems(items, expand) {
        return items.map(item => {
            const newItem = { ...item, expanded: expand };
            if (newItem.items && newItem.items.length > 0) {
                newItem.items = this.updateTreeItems(newItem.items, expand);
            }
            return newItem;
        });
    }

    notifyParent() {
        const event = new CustomEvent('treeupdate', {
            detail: this.items
        });
        this.dispatchEvent(event);
    }

    assignUniqueKeys(items, parentKey = '') {
        if (!Array.isArray(items)) {
            return [];
        }
        
        let newItems = items.map((item, index) => {
            const newItem = { ...item, key: `${parentKey}${index}` };
            if (newItem.items && Array.isArray(newItem.items)) {
                newItem.items = this.assignUniqueKeys(newItem.items, `${newItem.key}-`);
            }
            return newItem;
        });
    
        newItems.sort((a, b) => {
            const aIsLeaf = !a.items || a.items.length === 0;
            const bIsLeaf = !b.items || b.items.length === 0;
            if (aIsLeaf && !bIsLeaf) {
                return -1;
            } else if (!aIsLeaf && bIsLeaf) {
                return 1;
            } else {
                return 0;
            }
        });
    
        return newItems;
    }

    handleSearch() {
        this.expandAll();
        if (!this.searchText) {
            this.showToast('Error', 'Please enter a keyword', 'error');
            return;
        }
        const matchingItem = this.findItemByLabel(this.items, this.searchText);

        this.searchAnchor.forEach(anchor => {
            anchor.style.backgroundColor = 'white';
        });
        
        if (matchingItem) {
            requestAnimationFrame(() => {
                const anchor = this.findElementInTree(this.template, matchingItem.key);
                console.log('Anchor:', anchor);
                if (anchor) {
                    anchor.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
                    const labelSpan = anchor.querySelector('.slds-tree__item-label');
                    if (labelSpan) {
                        labelSpan.style.backgroundColor = 'yellow';
                        this.searchAnchor.push(labelSpan);
                    }
                } else {
                    this.showToast('Match failure', 'No items were matched', 'warning');
                }
            });
        } else {
            this.showToast('Match failure', 'No items were matched', 'warning');
        }
    }
    
    findElementInTree(element, key) {
        const childComponents = element.querySelectorAll('c-custom-tree-item');
        for (let childComponent of childComponents) {
            
            const found = childComponent.findElementByKey(key);
            if (found) {
                return found;
            }
        }
        return null;
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const button = this.template.querySelector('.back-to-top');
        if (window.scrollY > 200) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}