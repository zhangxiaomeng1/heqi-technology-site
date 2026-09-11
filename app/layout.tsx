import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '唐山赫启科技有限公司｜工厂自动化与焊接装备',
  description: '赫启科技提供工厂自动化整体方案、焊接装备、工装制造与项目技术服务。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN"><body>{children}</body></html>
  );
}
