import React from 'react'
import type { PathRouteProps } from 'react-router-dom'

import { loginPath, deliveryTransactionPath } from '@/lib/constants/routes'

const Home = React.lazy(() => import('@/lib/views/app-views/home'))

const LoginPage = React.lazy(() => import('@/lib/views/auth-views/login'))

const DeliveryTransactionPages = React.lazy(
  () => import('@/lib/views/app-views/delivery-transaction')
)

export const restrictedRoutes: Array<PathRouteProps> = [
  {
    path: loginPath,
    element: <LoginPage />,
  },
]

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: `${deliveryTransactionPath}/*`,
    element: <DeliveryTransactionPages />,
  },
]
