import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))
const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

//login Form//
const Login = React.lazy(() => import('./views/pages/login/Login'))

//***********************SystemSetting***********************//
const Global_Setup = React.lazy(()=>import('./views/base/SystemSetting/SystemSetting'))
const CompanyProfileLink = React.lazy(()=>import('./views/base/SystemSetting/CompanyProfileLink'))
const SocialLinkConfig = React.lazy(()=>import('./views/base/SystemSetting/SocialLinkConfig'))
const MailConfig  = React.lazy(()=>import('./views/base/SystemSetting/MailConfig'))
const MapAndSmsConfig  = React.lazy(()=>import('./views/base/SystemSetting/MapAndSmsConfig'))
const PushNotificationConfig  = React.lazy(()=>import('./views/base/SystemSetting/PushNotificationConfig'))
const PaymentSetting  = React.lazy(()=>import('./views/base/SystemSetting/PaymentSetting'))
const BusinessCountry  = React.lazy(()=>import('./views/base/SystemSetting/BusinessCountry'))
const BusinessState  = React.lazy(()=>import('./views/base/SystemSetting/BusinessState'))
const BusinessCity  = React.lazy(()=>import('./views/base/SystemSetting/BusinessCity'))
const Tax  = React.lazy(()=>import('./views/base/SystemSetting/Tax'))


 /****************system setting path************************* */ 

  const General = React.lazy(()=>import('./views/base/SystemSetting/General'))
  const NewCountry = React.lazy(()=>import('./views/base/SystemSetting/NewCountry'))
  const NewState = React.lazy(()=>import('./views/base/SystemSetting/NewState'))
  const NewTax = React.lazy(()=>import('./views/base/SystemSetting/NewTax'))
  const NewCity = React.lazy(()=>import('./views/base/SystemSetting/NewCity'))

  //**********************System Reference Menus*************************/
  const SystemReference = React.lazy(()=>import('./views/base/SystemReference/SystemReference'))
  const Customer = React.lazy(()=>import('./views/base/SystemReference/Customer'))
  const VehiCleanPartners = React.lazy(()=>import('./views/base/SystemReference/VehiCleanPartners'))
  const VehicleType = React.lazy(()=>import('./views/base/SystemReference/VehicleType'))
  const VehicleCatalogs = React.lazy(()=>import('./views/base/SystemReference/VehicleCatalogs'))
  const CustomerVehicles = React.lazy(()=>import('./views/base/SystemReference/CustomerVehicles'))
  const ServiceChart = React.lazy(()=>import('./views/base/SystemReference/ServiceChart'))
  const SubscriptionPlans = React.lazy(()=>import('./views/base/SystemReference/SubscriptionPlans'))
  const PromoCode = React.lazy(()=>import('./views/base/SystemReference/PromoCode'))
  const Notification = React.lazy(()=>import('./views/base/SystemReference/Notification'))
  const DisputeReason = React.lazy(()=>import('./views/base/SystemReference/DisputeReason'))
  const Tickets = React.lazy(()=>import('./views/base/SystemReference/Tickets'))
  const SystemRole = React.lazy(()=>import('./views/base/SystemReference/SystemRole'))
  const AffiliatePartner = React.lazy(()=>import('./views/base/SystemReference/AffiliatePartner'))
  const Merchants = React.lazy(()=>import('./views/base/SystemReference/Merchants'))

/**********************System Reference SubMenus*************************/
  const NewCustomer = React.lazy(()=>import('./views/base/SystemReference/NewCustomer'))
  const NewPartners = React.lazy(()=>import('./views/base/SystemReference/NewPartners'))
  const VehicleCategory = React.lazy(()=>import('./views/base/SystemReference/VehicleCategory'))
  const NewCatalog = React.lazy(()=>import('./views/base/SystemReference/NewCatalog'))
  const PlansCategory = React.lazy(()=>import('./views/base/SystemReference/PlansCategory'))
  const NewPromoCode = React.lazy(()=>import('./views/base/SystemReference/NewPromoCode'))
  const NewNotification = React.lazy(()=>import('./views/base/SystemReference/NewNotification'))
  const NewDisputeReason= React.lazy(()=>import('./views/base/SystemReference/NewDisputeReason'))
  const NewTickets= React.lazy(()=>import('./views/base/SystemReference/NewTickets'))

  /**********************E-wallet-Mangement Menus*************************/
  const Customers = React.lazy(()=>import('./views/base/E_Wallet_Management/Customers'))
  const Partners = React.lazy(()=>import('./views/base/E_Wallet_Management/Partners'))

  /**********************Payout Menus*************************/
  const Payout = React.lazy(()=>import('./views/base/Payout/Payout'))
  const NewPayout = React.lazy(()=>import('./views/base/Payout/NewPayout'))

 /**********************Report  Menus*************************/
 const Report = React.lazy(()=>import('./views/base/Report/Report'))
 const CustomerReport = React.lazy(()=>import('./views/base/Report/CustomerReport'))
 const PartnersReport = React.lazy(()=>import('./views/base/Report/PartnersReport'))
 const VehicleReport = React.lazy(()=>import('./views/base/Report/VehicleReport'))
 const OrderReport = React.lazy(()=>import('./views/base/Report/OrderReport'))
 const SubPlanReport = React.lazy(()=>import('./views/base/Report/SubPlanReport'))
 const NotificationReport = React.lazy(()=>import('./views/base/Report/NotificationReport'))
 const DisputeReasonReport = React.lazy(()=>import('./views/base/Report/DisputeReasonReport'))
 const TicketsReport = React.lazy(()=>import('./views/base/Report/TicketsReport'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },

  //***************************SystemSetting**********************/
  { path: '/base/SystemSetting/Global_Setup', name:'Global Setup',element:Global_Setup},
  { path: '/base/SystemSetting/CompanyProfileLink', name:'Company Profile Link',element:CompanyProfileLink},
  { path: '/base/SystemSetting/MailConfig', name:'Mail Config',element:MailConfig},
  { path: '/base/SystemSetting/SocialLinkConfig', name:'Social Link Config',element:SocialLinkConfig},
  { path: '/base/SystemSetting/MapAndSmsConfig', name:'Map And Sms Config',element:MapAndSmsConfig},
  { path: '/base/SystemSetting/PushNotificationConfig', name:'Push Notification Config',element:PushNotificationConfig},
  { path: '/base/SystemSetting/PaymentSetting', name:'Payment Setting',element:PaymentSetting},
  { path: '/base/SystemSetting/BusinessCountry', name:'Business Country',element:BusinessCountry},
  { path: '/base/SystemSetting/BusinessState', name:'Business State',element:BusinessState},
  { path: '/base/SystemSetting/BusinessCity', name:'Business City',element:BusinessCity},
  { path: '/base/SystemSetting/Tax', name:'Tax',element:Tax},


  //****************************SystemSettingPath***********************/
  { path: '/base/SystemSetting/General',name:'General',element:General},
  { path: '/base/SystemSetting/NewCountry',name:'New Country',element:NewCountry},
  { path: '/base/SystemSetting/NewState',name:'New State',element:NewState},
  { path: '/base/SystemSetting/NewTax',name:'New Tax',element:NewTax},
  { path: '/base/SystemSetting/NewCity',name:'New City',element:NewCity},
  
  //**********************System Reference Menus*************************/
  { path: '/base/SystemReference/SystemReference',name:'System Reference',element:SystemReference},
  { path: '/base/SystemReference/Customer',name:'Customer',element:Customer},
  { path: '/base/SystemReference/VehiCleanPartners',name:'VehiClean Partners',element:VehiCleanPartners},
  { path: '/base/SystemReference/VehicleType',name:'Vehicle Type',element:VehicleType},
  { path: '/base/SystemReference/VehicleCatalogs',name:'Vehicle Catalogs',element:VehicleCatalogs},
  { path: '/base/SystemReference/CustomerVehicles',name:'Customer Vehicles',element:CustomerVehicles},
  { path: '/base/SystemReference/ServiceChart',name:'Service Chart',element:ServiceChart},
  { path: '/base/SystemReference/SubscriptionPlans',name:'Subscription Plans',element:SubscriptionPlans},
  { path: '/base/SystemReference/PromoCode',name:'Promo Code',element:PromoCode},
  { path: '/base/SystemReference/Notification',name:'Notification',element:Notification},
  { path: '/base/SystemReference/DisputeReason',name:'Dispute Reason',element:DisputeReason},
  { path: '/base/SystemReference/Tickets',name:'Tickets',element:Tickets},
  { path: '/base/SystemReference/SystemRole',name:'System Role',element:SystemRole},
  { path: '/base/SystemReference/AffiliatePartner',name:'Affiliate Partner',element:AffiliatePartner},
  { path: '/base/SystemReference/Merchants',name:'Merchants',element:Merchants},

  /*****************************System Reference Sub menus****************/
  { path: '/base/SystemReference/NewCustomer',name:'New Customer',element:NewCustomer},
  { path: '/base/SystemReference/NewPartners',name:'New Partners',element:NewPartners},
  { path: '/base/SystemReference/VehicleCategory',name:'Vehicle Category',element:VehicleCategory},
  { path: '/base/SystemReference/NewCatalog',name:'New Catalog',element:NewCatalog},
  { path: '/base/SystemReference/PlansCategory',name:'Plans Category',element:PlansCategory},
  { path: '/base/SystemReference/NewPromoCode',name:'New Promo Code',element:NewPromoCode},
  { path: '/base/SystemReference/NewNotification',name:'New Notification',element:NewNotification},
  { path: '/base/SystemReference/NewDisputeReason',name:'New Dispute Reason',element:NewDisputeReason},
  { path: '/base/SystemReference/NewTickets',name:'New Tickets',element:NewTickets},

  /*****************************System Reference Sub menus****************/
  {path: '/base/E_Wallet_Management/Customers', name:'Customers', element:Customers},
  {path: '/base/E_Wallet_Management/Partners', name:'Partners', element:Partners},
  {path: '/base/Payout/Payout', name:'Payouts', element:Payout},
  {path: '/base/Payout/NewPayout', name:'New Payouts', element:NewPayout},

  /*****************************Report menus****************/
  {path: '/base/Report/Report', name:'Report', element:Report},
  {path: '/base/Report/CustomerReport', name:'Customer Report', element:CustomerReport},
  {path: '/base/Report/PartnersReport', name:'Partners Report', element:PartnersReport},
  {path: '/base/Report/VehicleReport',  name:'Vehicle Report', element:VehicleReport},
  {path: '/base/Report/OrderReport',  name:'Order Report', element:OrderReport},
  {path: '/base/Report/SubPlanReport',  name:'Subscription Plan Report', element:SubPlanReport},
  {path: '/base/Report/NotificationReport',  name:'Notification Report', element:NotificationReport},
  {path: '/base/Report/DisputeReasonReport',  name:'Dispute Reason Report', element:DisputeReasonReport},
  {path: '/base/Report/TicketsReport',  name:'Tickets Report', element:TicketsReport},
  ////////////////////////////////////Login Form/////////////////////////////
  {path: '/pages/login/Login',name:'Login' , element:Login }
] 


 export default routes
