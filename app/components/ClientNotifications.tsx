"use client";

import { NotificationManager, NotificationsProvider, setupNotificationConfig } from "notiflow";

setupNotificationConfig({
  defaultMode: "dark",
  colored: "none",
  duration: 6000,
  canClose: false,
  align: ["top", "right"],
});

export default function ClientNotifications({ children }: { children: React.ReactNode }) {
  return (
    <NotificationsProvider>
      <div style={{ position: "relative", zIndex: 999999 }}>
        <NotificationManager />
      </div>
      {children}
    </NotificationsProvider>
  );
}
