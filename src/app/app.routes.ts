import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
      {
        path:'',
        component: CardComponent
    }
    ,{
        path:'cart',
        component: CartComponent

    },
    // {
    //     path:'contato',
    //     component: SobreComponent
    // }
];
