import React from "react";
import { Bell, Wifi, CheckCircle, MoreHorizontal, Grid, Home, Key, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Banner } from "@/components/ui/banner";

export default function SmartHome() {
  return (
    <div className="w-[375px] h-screen bg-white flex flex-col mx-auto">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-[14px] h-[44px] text-[15px] font-semibold">
        <div className="pl-[18px]">9:41</div>
        <div className="flex items-center gap-[5px]">
          {/* Cellular bars */}
          <div className="flex items-end gap-[1px] h-[10.667px]">
            <div className="w-[1.5px] h-[3px] bg-black rounded-[0.5px]"></div>
            <div className="w-[1.5px] h-[5px] bg-black rounded-[0.5px]"></div>
            <div className="w-[1.5px] h-[7px] bg-black rounded-[0.5px]"></div>
            <div className="w-[1.5px] h-[10px] bg-black rounded-[0.5px]"></div>
          </div>
          {/* WiFi icon */}
          <Wifi className="w-[15px] h-[11px] fill-black" />
          {/* Battery */}
          <div className="relative w-[24px] h-[11px]">
            <div className="w-[22px] h-[11px] border border-black/35 rounded-[2.67px]"></div>
            <div className="absolute right-[-1px] top-[3.5px] w-[1px] h-[4px] bg-black/40 rounded-r-[1px]"></div>
            <div className="absolute left-[2px] top-[2px] w-[18px] h-[7px] bg-black rounded-[1.33px]"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-4 h-[44px]">
        <div className="w-[217px]"></div>
        <div className="flex items-center gap-6">
          {/* Notification */}
          <div className="relative">
            <Bell className="w-6 h-6 text-[#1D2025]" />
            <div className="absolute -top-1 -right-1 w-[10px] h-[10px] bg-[#32BDCD] border-2 border-white rounded-full"></div>
          </div>
          {/* Avatar */}
          <div className="relative w-6 h-6 bg-[#1D2025] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">J</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pb-2">
        <h1 className="text-[24px] font-bold text-[#1D2025] leading-8 font-[Rubik]">Smart Home</h1>
      </div>

      {/* Tab Navigation */}
      <div className="px-4 pb-6">
        <div className="flex items-center gap-5 h-8">
          {/* Devices Tab */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 h-5">
              <Key className="w-5 h-5 text-[#1D2025]" />
              <span className="text-base text-[#1D2025]">Devices</span>
            </div>
            <div className="h-1 w-full rounded-t-[4px] opacity-0"></div>
          </div>

          {/* Automations Tab (Active) */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 h-6">
              <div className="w-5 h-5 relative">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" className="w-5 h-5">
                  <path d="M16.1433 4.1076C14.8483 2.81328 13.1633 1.98113 11.3483 1.73957C9.53332 1.49802 7.68928 1.8605 6.1008 2.77105C5.45614 3.14229 4.86386 3.59782 4.33961 4.12558L2.88494 2.6489C2.86465 2.62588 2.83778 2.60964 2.80796 2.60238C2.77815 2.59512 2.74682 2.59719 2.71821 2.60831C2.68961 2.61942 2.6651 2.63905 2.64801 2.66453C2.63092 2.69002 2.62206 2.72014 2.62264 2.75082L2.54769 6.61994C2.54819 6.65937 2.5642 6.69701 2.59225 6.72471C2.62031 6.75242 2.65815 6.76795 2.69758 6.76795L6.42493 6.59971C6.45358 6.59932 6.48151 6.59072 6.50542 6.57495C6.52933 6.55917 6.54822 6.53687 6.55986 6.51069C6.57149 6.48452 6.57537 6.45555 6.57105 6.42723C6.56673 6.39891 6.55438 6.37243 6.53547 6.35091L4.97326 4.76594C5.66315 4.06782 6.48498 3.51384 7.39095 3.13624C8.29692 2.75865 9.26894 2.56497 10.2505 2.56647C14.3495 2.56647 17.6845 5.90127 17.6845 10.0001C17.6862 11.4017 17.2903 12.775 16.5428 13.9606C16.5112 14.0106 16.4899 14.0662 16.4799 14.1244C16.4699 14.1826 16.4714 14.2422 16.4844 14.2998C16.4975 14.3574 16.5217 14.4119 16.5558 14.4601C16.5899 14.5084 16.6331 14.5494 16.6831 14.5809C16.733 14.6125 16.7887 14.6338 16.8469 14.6438C16.9051 14.6538 16.9647 14.6523 17.0223 14.6392C17.0799 14.6262 17.1344 14.602 17.1826 14.5679C17.2309 14.5338 17.2719 14.4906 17.3034 14.4406C18.3093 12.8415 18.7422 10.9481 18.5311 9.07082C18.3201 7.1935 17.4776 5.44352 16.1418 4.1076H16.1433Z" fill="#1D2025"/>
                  <path d="M15.2665 15.4886C14.2979 16.3723 13.1131 16.9846 11.8319 17.2636C10.5508 17.5426 9.21864 17.4783 7.97028 17.0774C7.85743 17.0431 7.73563 17.0545 7.63113 17.1092C7.52663 17.1639 7.4478 17.2574 7.41163 17.3697C7.37545 17.4819 7.38483 17.6039 7.43774 17.7093C7.49065 17.8147 7.58285 17.8951 7.69448 17.9332C9.09379 18.3828 10.587 18.455 12.0232 18.1423C13.4593 17.8297 14.7874 17.1433 15.8731 16.1526C15.9612 16.0722 16.0137 15.96 16.0191 15.8409C16.0244 15.7218 15.9823 15.6054 15.9018 15.5173C15.8214 15.4293 15.7092 15.3768 15.5901 15.3714C15.4709 15.366 15.3545 15.4082 15.2665 15.4886Z" fill="#1D2025"/>
                  <path d="M3.53021 13.1835C4.11909 14.4232 5.03869 15.4762 6.18773 16.2268V16.2264C6.28756 16.2917 6.35736 16.394 6.38178 16.5107C6.4062 16.6275 6.38324 16.7492 6.31795 16.849C6.25265 16.9488 6.15037 17.0186 6.03361 17.043C5.91685 17.0674 5.79518 17.0445 5.69535 16.9792C4.40809 16.1381 3.3778 14.9582 2.71782 13.5694C2.66663 13.4617 2.66034 13.3381 2.70033 13.2257C2.74032 13.1134 2.8233 13.0215 2.93103 12.9703C3.03876 12.9191 3.16241 12.9128 3.27478 12.9528C3.38715 12.9928 3.47903 13.0758 3.53021 13.1835Z" fill="#1D2025"/>
                  <path d="M2.94302 11.3752C2.85842 10.9217 2.8159 10.4614 2.81599 10.0001V9.90491C2.81748 9.78566 2.77154 9.6707 2.68826 9.58532C2.60499 9.49994 2.49121 9.45114 2.37195 9.44965C2.25269 9.44816 2.13773 9.4941 2.05234 9.57737C1.96696 9.66064 1.91815 9.77442 1.91666 9.89367V10.0001C1.91663 10.5168 1.9643 11.0325 2.05906 11.5405C2.06937 11.599 2.09118 11.6549 2.12324 11.705C2.15531 11.755 2.19698 11.7982 2.24584 11.8321C2.29471 11.866 2.34981 11.8898 2.40794 11.9022C2.46608 11.9146 2.5261 11.9154 2.58454 11.9045C2.64298 11.8935 2.69867 11.8711 2.74839 11.8386C2.79811 11.806 2.84088 11.7639 2.87422 11.7146C2.90756 11.6654 2.9308 11.6101 2.94261 11.5518C2.95442 11.4936 2.95456 11.4335 2.94302 11.3752Z" fill="#1D2025"/>
                  <path d="M11.4414 9.82827C11.5486 10.4887 11.1001 11.1109 10.4397 11.2181C9.77927 11.3253 9.15698 10.8769 9.04977 10.2165C8.94257 9.55607 9.39105 8.93382 10.0515 8.82662C10.7119 8.71943 11.3342 9.16788 11.4414 9.82827Z" fill="#1D2025"/>
                </svg>
              </div>
              <span className="text-base text-[#1D2025] leading-6">Automations</span>
            </div>
            <div className="h-1 w-full rounded-t-[4px] bg-[#32BDCD]"></div>
          </div>

          {/* Hub Tab */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 h-5">
              <div className="w-5 h-5">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" className="w-5 h-5">
                  <path d="M5.10092 9.64182V15.5983L10.25 17.6039L15.3991 15.5983V9.64182L10.6347 11.4976C10.3867 11.5942 10.1133 11.5942 9.86524 11.4976L5.10092 9.64182ZM4.97149 8.83298L10.1057 10.8328C10.1987 10.8691 10.3013 10.8691 10.3943 10.8328L15.5285 8.83298C15.7408 8.75029 15.9775 8.86184 16.0571 9.08212C16.0745 9.12999 16.0833 9.18071 16.0833 9.23184V15.795C16.0833 15.9726 15.9772 16.1315 15.817 16.1939L10.3943 18.3062C10.3013 18.3424 10.1987 18.3424 10.1057 18.3062L4.68293 16.1939C4.52276 16.1315 4.41666 15.9726 4.41666 15.795V9.23184C4.41666 8.99655 4.60047 8.80581 4.82721 8.80581C4.87649 8.80581 4.92536 8.81501 4.97149 8.83298ZM10.2509 6.54468L6.57918 7.97489L10.249 9.39319L13.9208 7.96299L10.2509 6.54468ZM10.3459 5.82368L15.1886 7.69526C15.2629 7.72396 15.3215 7.78463 15.3493 7.86161C15.4025 8.00847 15.3308 8.1722 15.1893 8.22733L10.3458 10.1139C10.284 10.138 10.2159 10.1381 10.1541 10.1142L5.31137 8.24261C5.23712 8.21392 5.17849 8.15324 5.15065 8.07626C5.09753 7.92941 5.16919 7.76567 5.31071 7.71055L10.1542 5.82394C10.216 5.79987 10.284 5.79978 10.3459 5.82368ZM15.9588 4.11252C16.0926 4.25097 16.0929 4.47576 15.9595 4.6146C15.8261 4.75344 15.6094 4.75375 15.4757 4.61529C14.0991 3.19076 12.2407 2.37673 10.2574 2.37673C8.27051 2.37673 6.40918 3.19363 5.03202 4.62259C4.89841 4.76124 4.68178 4.76123 4.54818 4.62258C4.41457 4.48392 4.41458 4.25913 4.54819 4.12049C6.05241 2.5597 8.08718 1.66667 10.2574 1.66667C12.4237 1.66667 14.4553 2.55656 15.9588 4.11252ZM14.993 4.95369C15.1264 5.09258 15.126 5.31737 14.9922 5.45577C14.8583 5.59417 14.6417 5.59376 14.5083 5.45487C13.3871 4.28718 11.8694 3.61932 10.2488 3.61932C8.64223 3.61932 7.13651 4.27564 6.01767 5.42552C5.88342 5.5635 5.6668 5.56241 5.53383 5.4231C5.40087 5.28379 5.40191 5.059 5.53616 4.92102C6.78187 3.64076 8.46005 2.90927 10.2488 2.90927C12.0531 2.90927 13.7447 3.65361 14.993 4.95369ZM7.08931 6.28874C6.95555 6.42723 6.73892 6.42698 6.60547 6.28817C6.47201 6.14936 6.47226 5.92457 6.60602 5.78609C7.56645 4.79173 8.86467 4.22287 10.2488 4.22287C11.6448 4.22287 12.9531 4.80155 13.9155 5.81098C14.0484 5.95037 14.0472 6.17516 13.9129 6.31306C13.7785 6.45095 13.5619 6.44974 13.429 6.31035C12.5939 5.4344 11.4601 4.93292 10.2488 4.93292C9.04774 4.93292 7.92273 5.42589 7.08931 6.28874Z" fill="#1D2025"/>
                </svg>
              </div>
              <span className="text-base text-[#1D2025] font-bold">Hub</span>
            </div>
            <div className="h-1 w-full rounded-t-[4px] opacity-0"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 space-y-4 overflow-y-auto">
        {/* Beta Firmware Banner */}
        <Banner
          variant="slate"
          title="Beta Firmware Available"
          description="Your hub is eligible for beta firmware updates! Get early access to pre-release beta firmware and new features."
          primaryAction={{ label: "Opt in to beta", onClick: () => {} }}
          secondaryAction={{ label: "Dismiss", onClick: () => {} }}
          showIcon={true}
          icon={
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" className="w-6 h-6">
              <path d="M12.25 2C6.72717 2 2.25 6.47717 2.25 12C2.25 17.5228 6.72717 22 12.25 22C17.7728 22 22.25 17.5228 22.25 12C22.2543 6.47717 17.7728 2 12.25 2ZM12.2713 18.5728C11.8232 18.5728 11.4604 18.21 11.4604 17.7618C11.4604 17.3137 11.8232 16.9509 12.2713 16.9509C12.7195 16.9509 13.0823 17.3137 13.0823 17.7618C13.0823 18.21 12.7195 18.5728 12.2713 18.5728ZM13.0823 13.9249C13.0823 14.373 12.7195 14.7358 12.2713 14.7358C11.8232 14.7358 11.4604 14.373 11.4604 13.9249L11.4732 6.34486C11.4732 5.89671 11.836 5.53393 12.2841 5.53393C12.7323 5.53393 13.0951 5.89671 13.0951 6.34486L13.0823 13.9249Z" fill="#663500"/>
            </svg>
          }
          className="w-full"
        />

        {/* Hub Status Card */}
        <Card className="w-full shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-base font-bold text-[#1D2025]">Hub Status</CardTitle>
            <MoreHorizontal className="w-6 h-6 text-[#676F79]" />
          </CardHeader>
          <CardContent className="space-y-4">
            {/* WiFi Status */}
            <div className="flex items-center gap-3">
              <Wifi className="w-6 h-6 text-[#0A8930]" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#0A8930]">HomeWiFi345</span>
                <span className="text-xs font-bold text-[#676F79]">Connected</span>
              </div>
            </div>

            {/* Status Badges */}
            <div className="flex items-center gap-4">
              <Badge className="bg-[#E8FCE8] text-[#056121] border-0 px-3 py-1 rounded-full flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span className="text-xs font-bold">5 Devices Online</span>
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Contact Sensor Device */}
        <Card className="w-full shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-6">
              {/* Device Icon */}
              <div className="w-16 h-16 rounded-full bg-[#D9EBFC] border-4 border-[#A0CCF8] flex items-center justify-center relative">
                <div className="w-10 h-10 rounded-full bg-[#0378D4] flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                    <path d="M8.2625 25.3187H3C1.7563 25.3187 0.75 24.3125 0.75 23.0687V4.75C0.75 3.5063 1.7563 2.5 3 2.5H8.2625V25.3187ZM3 4C2.5875 4 2.25 4.3375 2.25 4.75V23.0687C2.25 23.4812 2.5875 23.8187 3 23.8187H6.7625V4H3Z" fill="#FBFCFD"/>
                    <path d="M24.0003 25.3187H10.8503V2.5H24.0003C25.244 2.5 26.2503 3.5063 26.2503 4.75V23.0687C26.2503 24.3125 25.2378 25.3187 24.0003 25.3187ZM12.3503 23.8187H24.0003C24.4128 23.8187 24.7503 23.4812 24.7503 23.0687V4.75C24.7503 4.3375 24.4128 4 24.0003 4H12.3503V23.8187Z" fill="#FBFCFD"/>
                  </svg>
                </div>
              </div>

              {/* Device Details */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#3E4650] mb-2">Contact Sensor</h3>
                <Badge className="bg-transparent border border-[#037766] text-[#037766] px-5 py-0 rounded-full">
                  <span className="text-xs font-bold">Motion Detected</span>
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3 pb-4">
          <Button variant="solid" size="large" className="w-full h-14 shadow-lg">
            Button
          </Button>
          <Button variant="plain" size="large" className="w-full h-14">
            Button
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="relative">
        {/* Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        
        {/* Navigation */}
        <div className="flex justify-center pb-7 pt-4">
          <div className="flex items-center justify-center gap-3 px-3 py-1 bg-white/75 backdrop-blur-[10px] rounded-[20px] shadow-[0_2px_20px_rgba(0,0,0,0.15)] w-[319px] h-16">
            <div className="flex items-center justify-center w-6 h-6">
              <Grid className="w-6 h-6 text-[#1D2025]" />
            </div>
            <div className="flex items-center justify-center w-6 h-6">
              <Home className="w-6 h-6 text-[#1D2025]" />
            </div>
            <div className="flex items-center justify-center w-6 h-6">
              <Key className="w-6 h-6 text-[#1D2025]" />
            </div>
            <div className="flex items-center justify-center w-6 h-6">
              <Users className="w-6 h-6 text-[#1D2025]" />
            </div>
            <div className="flex items-center justify-center w-6 h-6">
              <Clock className="w-6 h-6 text-[#1D2025]" />
            </div>
            {/* Home indicator line */}
            <div className="absolute bottom-2 w-6 h-[5px] bg-[#1D2025] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
