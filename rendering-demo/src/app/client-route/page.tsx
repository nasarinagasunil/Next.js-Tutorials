"use client"

import { serverSideFunction } from "@/utils/server-utils"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoute() {
    const theme = useTheme();
    const clientResult= clientSideFunction();
    return (
        <>
            <div style={{ color: theme.colors.secondary }}>Client Route</div>
            <p>{clientResult}</p>
        </>
        
      );
}