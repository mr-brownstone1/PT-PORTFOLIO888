"use client";

import type { ComponentType } from "react";
import {
  ApartmentOutlined,
  AppstoreOutlined,
  BlockOutlined,
  CompassOutlined,
  ExperimentOutlined,
  LayoutOutlined,
  MobileOutlined,
  PartitionOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  SafetyOutlined,
  SendOutlined,
  SwapOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

/** Map iconKey จาก config ไปยังไอคอนมินิมอล Ant Design */
export const stackIconMap: Record<string, ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  ApartmentOutlined,
  AppstoreOutlined,
  BlockOutlined,
  CompassOutlined,
  ExperimentOutlined,
  LayoutOutlined,
  MobileOutlined,
  PartitionOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  SafetyOutlined,
  SendOutlined,
  SwapOutlined,
  ThunderboltOutlined,
};
