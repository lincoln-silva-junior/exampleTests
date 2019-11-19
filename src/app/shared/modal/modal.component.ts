import { Component, Input } from "@angular/core";

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    inputs: ['title', 'width', 'visible', 'inside']
})

export class ModalComponent {

    title: any;
    visible: boolean = false;
    width: any;
    btnCloseModal: boolean = false;
    inside: any;

    @Input() zIndex = 2147483647;
    @Input() noPadding = false;

    closeModal() {
        this.visible = false;
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    }

    showModal(zIndex?: number, noPadding?: boolean) {
        this.zIndex = zIndex ? zIndex : this.zIndex;
        this.noPadding = noPadding ? noPadding : this.noPadding;
        this.visible = true;
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    getVisible(){
        return this.visible;
    }

}
