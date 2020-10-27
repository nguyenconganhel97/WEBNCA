import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export default {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'Menu',
  pwa: false,
  logo: 'https://kpluss.com.vn/wp-content/uploads/2019/10/icon-home-8.png',
  iconfontUrl: '',
} as LayoutSettings & {
  pwa: boolean;
};
