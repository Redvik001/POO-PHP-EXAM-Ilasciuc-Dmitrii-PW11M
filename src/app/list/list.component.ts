import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    private itemsValue;
    @Input()
    get items() {
        return this.itemsValue;
    }
    @Output() itemsChange: EventEmitter<any> = new EventEmitter();
    set items(value) {
        this.itemsValue = value;
        this.itemsChange.emit(this.itemsValue);
    }

    @Input() labelFieldName = "title";
    @Input() labelIsGetter = true;
    @Input() showDelBtn = false;
    @Input() showAddBtn = false;
    @Input() showChangeBtn = false;

    @Output() onDelItem: EventEmitter<any> = new EventEmitter();
    @Output() onAddItem: EventEmitter<any> = new EventEmitter();
    @Output() onChangeItem: EventEmitter<any> = new EventEmitter();

    constructor(
        private confirmS: ConfirmationService,
    ) { }

    delItem(idx: number) {
        this.confirmS.confirm({
            header: "Вы действительно хотите удалить этот элемент?",
            acceptLabel: "Удалить",
            rejectLabel: "Отмена",
            accept: () => {
                this.onDelItem.emit(this.items.splice(idx, 1)[0]);
            }
        });
    }

    addItem() {
        this.onAddItem.emit();
    }

    changeItem(item) {
        this.onChangeItem.emit(item);
    }
}