import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  return {
    locale: 'zh',
    messages: (await import('../i18n/messages/zh.json')).default,
  };
});
