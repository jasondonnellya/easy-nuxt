// const defaultPath = './components/'

// Columns
import Columns from './components/Columns/_'
import Column from './components/Columns/Column'

// Components
import Breadcrumb from './components/Components/Breadcrumb/_'

import Card from './components/Components/Card/_'
import CardContent from './components/Components/Card/_Content'
import CardFooter from './components/Components/Card/_Footer'
import CardFooterItem from './components/Components/Card/_FooterItem'
import CardHeader from './components/Components/Card/_Header'
import CardHeaderIcon from './components/Components/Card/_HeaderIcon'
import CardHeaderTitle from './components/Components/Card/_HeaderTitle'
import CardImage from './components/Components/Card/_Image'

import Dropdown from './components/Components/Dropdown/_'
import DropdownContent from './components/Components/Dropdown/_Content'
import DropdownDivider from './components/Components/Dropdown/_Divider'
import DropdownItem from './components/Components/Dropdown/_Item'
import DropdownMenu from './components/Components/Dropdown/_Menu'
import DropdownTrigger from './components/Components/Dropdown/_Trigger'

import BLink from './components/Components/BLink/_'

import Menu from './components/Components/Menu/_'
import MenuLabel from './components/Components/Menu/_Label'
import MenuList from './components/Components/Menu/_List'

import Message from './components/Components/Message/_'
import MessageBody from './components/Components/Message/_Body'
import MessageHeader from './components/Components/Message/_Header'

import Modal from './components/Components/Modal/_'
import ModalBackground from './components/Components/Modal/_Background'
import ModalClose from './components/Components/Modal/_Close'
import ModalContent from './components/Components/Modal/_Content'

import Navbar from './components/Components/Navbar/_'
import NavbarBrand from './components/Components/Navbar/_Brand'
import NavbarBurger from './components/Components/Navbar/_Burger'
import NavbarDivider from './components/Components/Navbar/_Divider'
import NavbarDropdown from './components/Components/Navbar/_Dropdown'
import NavbarEnd from './components/Components/Navbar/_End'
import NavbarItem from './components/Components/Navbar/_Item'
import NavbarLink from './components/Components/Navbar/_Link'
import NavbarMenu from './components/Components/Navbar/_Menu'
import NavbarStart from './components/Components/Navbar/_Start'


import Pagination from './components/Components/Pagination/_'
import PaginationEllipsis from './components/Components/Pagination/_Ellipsis'
import PaginationLink from './components/Components/Pagination/_Link'
import PaginationList from './components/Components/Pagination/_List'
import PaginationNext from './components/Components/Pagination/_Next'
import PaginationPrevious from './components/Components/Pagination/_Previous'

import Panel from './components/Components/Panel/_'
import PanelBlock from './components/Components/Panel/_Block'
import PanelHeading from './components/Components/Panel/_Heading'
import PanelTabs from './components/Components/Panel/_Tabs'
import PanelIcon from './components/Components/Panel/_Icon' 

import Tabs from './components/Components/Tabs/_'

// Elements
import Block from './components/Elements/Block/_'
import Box from './components/Elements/Box/_'
import Button from './components/Elements/Button/_'
import Content from './components/Elements/Content/_'
import Delete from './components/Elements/Delete/_'

import Icon from './components/Elements/Icon/_'
import IconText from './components/Elements/Icon/_Text'

import Image from './components/Elements/Image/_'
import Notification from './components/Elements/Notification/_'
import ProgressBar from './components/Elements/ProgressBar/_'
import Subtitle from './components/Elements/Subtitle/_'
import Table from './components/Elements/Table/_'

import Tag from './components/Elements/Tags/Tag'
import Tags from './components/Elements/Tags/_'


import BTitle from './components/Elements/BTitle/_'

// Form
import Checkbox from './components/Form/Checkbox/_'
import CheckboxContainer from './components/Form/Checkbox/_Container'

import Control from './components/Form/Control/_'
import Field from './components/Form/Field/_'

import File from './components/Form/File/_'
import FileCta from './components/Form/File/_Cta'
import FileIcon from './components/Form/File/_Icon'
import FileInput from './components/Form/File/_Input'
import FileLabel from './components/Form/File/_Label'
import FileName from './components/Form/File/_Name'
import FileComponent from './components/Form/File/_Component'

import Help from './components/Form/Help/_'
import Input from './components/Form/Input/_'
import Label from './components/Form/Label/_'

import Radio from './components/Form/Radio/_'
import RadioContainer from './components/Form/Radio/_Container'

import Select from './components/Form/Select/_'
import Textarea from './components/Form/Textarea/_'

// Layout
import Container from './components/Layout/Container/_'
import Footer from './components/Layout/Footer/_'

import Hero from './components/Layout/Hero/_'
import HeroBody from './components/Layout/Hero/_Body'
import HeroHead from './components/Layout/Hero/_Head'

import Level from './components/Layout/Level/_'
import LevelItem from './components/Layout/Level/_LevelItem'
import PLevelItem from './components/Layout/Level/_PLevelItem'
import LevelLeft from './components/Layout/Level/_LevelLeft'
import LevelRight from './components/Layout/Level/_LevelRight'

import MediaObject from './components/Layout/MediaObject/_'
import MediaContent from './components/Layout/MediaObject/_Content'
import MediaLeft from './components/Layout/MediaObject/_Left'
import MediaRight from './components/Layout/MediaObject/_Right'

import Section from './components/Layout/Section/_'
import Tile from './components/Layout/Tile/_'

// Utils
import BackToTop from './components/Utils/BackToTop/_'
import SkeletonLoader from './components/Utils/SkeletonLoader/_'


const components = [
    // Columns
    { name: 'Columns', component: Columns },
    { name: 'Column', component: Column },

    // Components
    { name: 'Breadcrumb', component: Breadcrumb },

    { name: 'Card', component: Card },
    { name: 'CardContent', component: CardContent },
    { name: 'CardFooter', component: CardFooter },
    { name: 'CardFooterItem', component: CardFooterItem },
    { name: 'CardHeader', component: CardHeader },
    { name: 'CardHeaderIcon', component: CardHeaderIcon },
    { name: 'CardHeaderTitle', component: CardHeaderTitle },
    { name: 'CardImage', component: CardImage },

    { name: 'Dropdown', component: Dropdown },
    { name: 'DropdownContent', component: DropdownContent },
    { name: 'DropdownDivider', component: DropdownDivider },
    { name: 'DropdownItem', component: DropdownItem },
    { name: 'DropdownMenu', component: DropdownMenu },
    { name: 'DropdownTrigger', component: DropdownTrigger },

    { name: 'BLink', component: BLink },

    { name: 'Menu', component: Menu },
    { name: 'MenuLabel', component: MenuLabel },
    { name: 'MenuList', component: MenuList },

    { name: 'Message', component: Message },
    { name: 'MessageBody', component: MessageBody },
    { name: 'MessageHeader', component: MessageHeader },

    { name: 'Modal', component: Modal },
    { name: 'ModalBackground', component: ModalBackground },
    { name: 'ModalClose', component: ModalClose },
    { name: 'ModalContent', component: ModalContent },

    { name: 'Navbar', component: Navbar },
    { name: 'NavbarBrand', component: NavbarBrand },
    { name: 'NavbarBurger', component: NavbarBurger },
    { name: 'NavbarDivider', component: NavbarDivider },
    { name: 'NavbarDropdown', component: NavbarDropdown },
    { name: 'NavbarEnd', component: NavbarEnd },
    { name: 'NavbarItem', component: NavbarItem },
    { name: 'NavbarLink', component: NavbarLink },
    { name: 'NavbarMenu', component: NavbarMenu },
    { name: 'NavbarStart', component: NavbarStart },

    { name: 'Pagination', component: Pagination },
    { name: 'PaginationEllipsis', component: PaginationEllipsis },
    { name: 'PaginationLink', component: PaginationLink },
    { name: 'PaginationList', component: PaginationList },
    { name: 'PaginationNext', component: PaginationNext },
    { name: 'PaginationPrevious', component: PaginationPrevious },

    { name: 'Panel', component: Panel },
    { name: 'PanelBlock', component: PanelBlock },
    { name: 'PanelHeading', component: PanelHeading },
    { name: 'PanelTabs', component: PanelTabs },
    { name: 'PanelIcon', component: PanelIcon },

    { name: 'Tabs', component: Tabs },

    // Elements
    { name: 'Block', component: Block },
    { name: 'Box', component: Box },
    { name: 'Button', component: Button },
    { name: 'Content', component: Content },
    { name: 'Delete', component: Delete },
    { name: 'Icon', component: Icon },
    { name: 'IconText', component: IconText },
    { name: 'Image', component: Image },
    { name: 'Notification', component: Notification },
    { name: 'ProgressBar', component: ProgressBar },
    { name: 'Subtitle', component: Subtitle },
    { name: 'Table', component: Table },

    { name: 'Tag', component: Tag },
    { name: 'Tags', component: Tags },

    { name: 'BTitle', component: BTitle },

    // Form
    { name: 'Checkbox', component: Checkbox },
    { name: 'CheckboxContainer', component: CheckboxContainer },

    { name: 'Control', component: Control },
    { name: 'Field', component: Field },

    { name: 'File', component: File },
    { name: 'FileCta', component: FileCta },
    { name: 'FileIcon', component: FileIcon },
    { name: 'FileInput', component: FileInput },
    { name: 'FileLabel', component: FileLabel },
    { name: 'FileName', component: FileName },
    { name: 'FileComponent', component: FileComponent },

    { name: 'Help', component: Help },
    { name: 'Input', component: Input },
    { name: 'Label', component: Label },

    { name: 'Radio', component: Radio },
    { name: 'RadioContainer', component: RadioContainer },

    { name: 'Select', component: Select },
    { name: 'Textarea', component: Textarea },

    // Layout
    { name: 'Container', component: Container },
    { name: 'Footer', component: Footer },

    { name: 'Hero', component: Hero },
    { name: 'HeroBody', component: HeroBody },
    { name: 'HeroHead', component: HeroHead },

    { name: 'Level', component: Level },
    { name: 'LevelItem', component: LevelItem },
    { name: 'PLevelItem', component: PLevelItem },
    { name: 'LevelLeft', component: LevelLeft },
    { name: 'LevelRight', component: LevelRight },

    { name: 'MediaObject', component: MediaObject },
    { name: 'MediaContent', component: MediaContent },
    { name: 'MediaLeft', component: MediaLeft },
    { name: 'MediaRight', component: MediaRight },

    { name: 'Section', component: Section },
    { name: 'Tile', component: Tile },

    // Utils
    { name: 'BackToTop', component: BackToTop },
    { name: 'SkeletonLoader', component: SkeletonLoader },
]

export default defineNuxtPlugin(async (nuxtApp) => {
    components.forEach((item) => {
        nuxtApp.vueApp.component(item.name, item.component)
    })
})