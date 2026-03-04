import { IMenu } from './menu.types'

const firstMenu: IMenu = {
	title: 'Меню',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Главная',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Каталог',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Новинки',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Популярное',
		},
	],
}

const userMenu: IMenu = {
	title: 'Общее',
	items: [],
}

export const menus: IMenu[] = [firstMenu, userMenu]
