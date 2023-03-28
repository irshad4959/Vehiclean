import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,cibHashnode,
  cilMoney,cibGreensock,
  cilCalculator,cilMemory,
  cilChartPie,cilGroup,
  cilDescription,cilWallet,
  cilNotes,cibCashapp,
  cilStar,
  cilContact,
  cilCog,
  cilInbox,cilFont,
  cilSoccer,cilVoiceOverRecord,
  cilLink,cilShortText,
  cilHttps,cilColumns,
  cilLocationPin,cibElasticStack,
  cilDollar,cibBitcoin,
  cilControl,cilUser,
  cilLifeRing,cibSignal,
  cilAssistiveListeningSystem,
  cilPeople,cilAudioDescription,
  cilCarAlt,cibLumen,
  cilGarage,cibJoomla,
  cilBabyCarriage,cibCodewars,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
// ********************Here we start NavBar **********************//
const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  //*******************************System Settings********************/
  {
    component: CNavGroup,
    name: 'Global Setup',
    icon: <CIcon icon={cilControl} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'System Setting',
        to: '/base/SystemSetting/Global_Setup',
        icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
      },
      // {
      //   component: CNavItem,
      //   name: 'Company Profile Link',
      //   to: '/base/SystemSetting/CompanyProfileLink',
      //   icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Social Link Config',
      //   to: '/base/SystemSetting/SocialLinkConfig',
      //   icon: <CIcon icon={cilInbox} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Map and Sms Config',
      //   to: '/base/SystemSetting/MapAndSmsConfig',
      //   icon: <CIcon icon={cilLocationPin} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Mail Config',
      //   to: '/base/SystemSetting/MailConfig',
      //   icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Push Notification Config',
      //   to: '/base/SystemSetting/PushNotificationConfig',
      //   icon: <CIcon icon={cilHttps} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Payment Setting',
      //   to: '/base/SystemSetting/PaymentSetting',
      //   icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Business Country',
      //   to: '/base/SystemSetting/BusinessCountry',
      //   icon: <CIcon icon={cilControl} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Business State',
      //   to: '/base/SystemSetting/BusinessState',
      //   icon: <CIcon icon={cilLifeRing} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Business City',
      //   to: '/base/SystemSetting/BusinessCity',
      //   icon: <CIcon icon={cilSoccer} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tax',
      //   to: '/base/SystemSetting/Tax',
      //   icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
      // },
    ] 
  },
  {
    component: CNavGroup,
    name: 'SystemReference',
    to: '/base/SystemReference',
    icon: <CIcon icon={cilAssistiveListeningSystem} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'System Reference',
        to: '/base/SystemReference/SystemReference',
        icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
      },
      // {
      //   component: CNavItem,
      //   name: 'Customer',
      //   to: '/base/SystemReference/Customer',
      //   icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'VehiClean Partners',
      //   to: '/base/SystemReference/VehiCleanPartners',
      //   icon: <CIcon icon={cibGreensock} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Vehicle Type',
      //   to: '/base/SystemReference/VehicleType',
      //   icon: <CIcon icon={cilGarage} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Vehicle Catalogs',
      //   to: '/base/SystemReference/VehicleCatalogs',
      //   icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Customer Vehicles',
      //   to: '/base/SystemReference/CustomerVehicles',
      //   icon: <CIcon icon={cilBabyCarriage} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Service Chart',
      //   to: '/base/SystemReference/ServiceChart',
      //   icon: <CIcon icon={cibCodewars} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Subscription Plans',
      //   to: '/base/SystemReference/SubscriptionPlans',
      //   icon: <CIcon icon={cibHashnode} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Promo Code',
      //   to: '/base/SystemReference/PromoCode',
      //   icon: <CIcon icon={cibJoomla} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Notification',
      //   to: '/base/SystemReference/Notification',
      //   icon: <CIcon icon={cibLumen} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Dispute Reason',
      //   to: '/base/SystemReference/DisputeReason',
      //   icon: <CIcon icon={cibSignal} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tickets',
      //   to: '/base/SystemReference/Tickets',
      //   icon: <CIcon icon={cilAudioDescription} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'System Role',
      //   to: '/base/SystemReference/SystemRole',
      //   icon: <CIcon icon={cilMemory} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Affiliate Partner',
      //   to: '/base/SystemReference/AffiliatePartner',
      //   icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
      // },
      // {
      //   component: CNavItem,
      //   name: 'Merchants',
      //   to: '/base/SystemReference/Merchants',
      //   icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'E-Wallet Management',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Customer',
        to: '/base/E_Wallet_Management/Customers',
        icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,

      },
      {
        component: CNavItem,
        name: 'Partners',
        to: '/base/E_Wallet_Management/Partners',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,

      },
    ],
  },
  {
       component: CNavGroup,
       name: 'Payout',
       icon: <CIcon icon={cibCashapp} customClassName="nav-icon" />,
       items: [
       {
        component: CNavItem,
        name: 'Payout',
        to: '/base/Payout/Payout',
        icon: <CIcon icon={cibBitcoin} customClassName="nav-icon" />,
      }
     ],
    },
    {
      component: CNavGroup,
      name: 'Report',
      to: '/base/Report/',
      icon: <CIcon icon={cibElasticStack} customClassName="nav-icon" />,
      items: [
        {
          component: CNavItem,
          name: 'Report',
          to: '/base/Report/Report',
          icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
        },
        // {
        //   component: CNavItem,
        //   name: 'Customer',
        //   to: '/base/Report/CustomerReport',
        //   icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
        // },
        // {
        //   component: CNavItem,
        //   name: 'Partners',
        //   to: '/base/Report/PartnersReport',
        //   icon: <CIcon icon={cilColumns} customClassName="nav-icon" />,
        // },
        // {
        //   component: CNavItem,
        //   name: 'Vehicle',
        //   to: '/base/Report/VehicleReport',
        //   icon: <CIcon icon={cilInbox} customClassName="nav-icon" />,
        // },
        // {
        //   component: CNavItem,
        //   name: 'Order',
        //   to: '/base/Report/OrderReport',
        //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        // },
        // {
        //   component: CNavItem,
        //   name: 'Subscription Plan',
        //   to: '/base/Report/SubPlanReport',
        //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        // },
        // {
        //   component: CNavItem,
        //   name: 'Notification',
        //   to: '/base/Report/NotificationReport',
        //   icon: <CIcon icon={cilShortText} customClassName="nav-icon" />,
        // },
        // {
        //   component: CNavItem,
        //   name: 'Dispute Reason',
        //   to: '/base/Report/DisputeReasonReport',
        //   icon: <CIcon icon={cilVoiceOverRecord} customClassName="nav-icon" />,
        // },
        // {
        //   component: CNavItem,
        //   name: 'Tickets',
        //   to: '/base/Report/TicketsReport',
        //   icon: <CIcon icon={cilFont} customClassName="nav-icon" />,
        // },
   ],
  },
   {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
   {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
   },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
