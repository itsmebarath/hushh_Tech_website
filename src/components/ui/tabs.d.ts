import React, { ReactNode } from 'react';
interface TabsProps {
    defaultValue: string;
    children: ReactNode;
    className?: string;
}
interface TabsTriggerProps {
    value: string;
    children: ReactNode;
}
interface TabsContentProps {
    value: string;
    children: ReactNode;
}
export declare const Tabs: React.FC<TabsProps>;
export declare const TabsList: React.FC<{
    children: ReactNode;
    activeTab?: string;
    setActiveTab?: (value: string) => void;
}>;
export declare const TabsTrigger: React.FC<TabsTriggerProps & {
    activeTab?: string;
    setActiveTab?: (value: string) => void;
}>;
export declare const TabsContent: React.FC<TabsContentProps>;
export {};
