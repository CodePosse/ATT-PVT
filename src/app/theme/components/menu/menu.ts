import { Menu } from './menu.model';

export const verticalMenuItems = [
    new Menu (1, 'Home', '/pages/dashboard', null, 'tachometer', null, false, 0),
    new Menu (2, 'Projects', '/pages/projects', null, 'tasks', null, false, 0),
    new Menu (3, 'Devices', '/pages/tables/dynamic-tables/ngx', null, 'cogs', null, false, 0),
    new Menu (4, 'Test Cases', '/pages/tables/dynamic-tables/testCases', null, 'folder-open', null, false, 0),
    new Menu (5, 'Execution', '/pages/charts', null, 'cogs', null, false, 0),
    new Menu (6, 'Tabs', '/pages/tabs', null, 'cogs', null, false, 0) 
]
export const horizontalMenuItems = [ ]