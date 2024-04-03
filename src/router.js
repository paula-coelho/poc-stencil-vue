import { createRouter, createWebHashHistory } from 'vue-router';
import ButtonTest from './components/ButtonTest.vue';
import CheckboxTest from './components/CheckboxTest.vue';
import InputTest from './components/InputTest.vue';
import ListTest from './components/ListTest.vue';
import RadiobuttonTest from './components/RadiobuttonTest.vue';
import TextareaTest from './components/TextareaTest.vue';
import FormTest from './components/FormTest.vue';

const routes = [
  { path: '/button', component: ButtonTest },
  { path: '/checkbox', component: CheckboxTest },
  { path: '/input', component: InputTest },
  { path: '/list', component: ListTest },
  { path: '/radiobutton', component: RadiobuttonTest },
  { path: '/textarea', component: TextareaTest },
 
  { path: '/form', component: FormTest },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;