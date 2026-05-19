import type { ComponentType } from "react";

/** Stack item icons — outline SVG ชุดเดียวกับ Bento / About */
import type { IconSize } from "@/components/ui/Icon";
import {
  BlocksIcon,
  BoltIcon,
  CompassIcon,
  ComponentsIcon,
  DevicePhoneIcon,
  FlaskIcon,
  FlowIcon,
  LayoutIcon,
  PlayIcon,
  RocketIcon,
  SendIcon,
  ShieldIcon,
  StructureIcon,
  SwapIcon,
} from "@/components/icons/outlined";

type StackIconComponent = ComponentType<{ size?: IconSize; className?: string }>;

/** Map iconKey จาก config → ไอคอน outline ชุดเดียวกับ Bento / About */
export const stackIconMap: Record<string, StackIconComponent> = {
  ApartmentOutlined: FlowIcon,
  PartitionOutlined: StructureIcon,
  CompassOutlined: CompassIcon,
  LayoutOutlined: LayoutIcon,
  ExperimentOutlined: FlaskIcon,
  AppstoreOutlined: BlocksIcon,
  BlockOutlined: ComponentsIcon,
  SwapOutlined: SwapIcon,
  MobileOutlined: DevicePhoneIcon,
  SafetyOutlined: ShieldIcon,
  PlayCircleOutlined: PlayIcon,
  ThunderboltOutlined: BoltIcon,
  RocketOutlined: RocketIcon,
  SendOutlined: SendIcon,
};
