import { Menu } from './menu.model';

export const verticalMenuItems = [
    new Menu (1, 'Home', '/pages/dashboard', null, 'tachometer', null, false, 0),
    new Menu (2, 'Projects', '/pages/projects', null, 'laptop', null, false, 0),
    new Menu (3, 'Devices', '/pages/tables/dynamic-tables/ngx', null, 'laptop', null, false, 0),
    new Menu (4, 'Test Cases', '/pages/tables/dynamic-tables/testCases', null, 'keyboard-o', null, false, 0)
]
