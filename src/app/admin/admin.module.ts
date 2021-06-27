import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminDetailsComponent } from "../admin-details/admin-details.component";
import { AdminRoutingmodule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";

@NgModule({
    imports:[CommonModule, AdminRoutingmodule],
    exports:[
    ],
    declarations:[ AdminComponent,
        AdminDetailsComponent]
})

export class Adminmodule{}