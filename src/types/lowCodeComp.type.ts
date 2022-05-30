import { DraggableItemKey } from '../constants/lowCodeComp'

export enum ComponentName {
  BoxComponent = 'BoxComponent',
  TextComponent = 'TextComponent',
  ImageComponent = 'ImageComponent',
  VideoComponent = 'VideoComponent',
  AudioComponent = 'AudioComponent',
  HouseComponent = 'HouseComponent'
}
//文本组件属性
export interface TextComponent {
  id: string
  name: ComponentName.TextComponent
  type: string
  data: string
  parentid: string

  style: {
    position: string
    left: string
    top: string
    width: string
    height: string

    border: string
    borderRadius: string
    backgroundColor: string
    padding: string
    color: string
    textAlign: string
    fontSize: string
  }
}

//图片组件属性
export interface ImageComponent {
  id: string
  name: ComponentName.ImageComponent
  type: string
  data: string
  parentid: string

  style: {
    position: string
    left: string
    top: string
    width: string
    height: string
    border: string
    backgroundColor: string
    padding: string
  }
}

//视频组件属性
export interface VideoComponent {
  id: string
  name: ComponentName.VideoComponent
  type: string
  data: string
  parentid: string

  style: {
    position: string
    left: string
    top: string
    width: string
    height: string
    border: string
    backgroundColor: string
    padding: string
  }
}

//音频组件属性
export interface AudioComponent {
  id: string
  name: ComponentName.AudioComponent
  type: string
  data: string
  parentid: string

  style: {
    position: string
    left: string
    top: string
    width: string
    height: string
    padding: string
  }
}

export interface BoxComponent {
  id: string
  name: ComponentName.BoxComponent
  type: string
  data: string
  parentid: string
  style: {
    position: string
    left: string
    top: string
    width: string
    height: string
    border: string
    borderRadius: string
    backgroundColor: string
    padding: string
  }
  children: ComponentSchema[]
}
export interface HouseComponent {
  id: string
  name: ComponentName.HouseComponent
  type: string
  data: string
  parentid: string
  style: {
    position: string
    left: string
    top: string
  }
}
export type ComponentSchema =
  | BoxComponent
  | TextComponent
  | ImageComponent
  | VideoComponent
  | AudioComponent
  | HouseComponent

export interface IPageSchema {
  projectId: string
  projectName: string
  author: string
  data: ComponentSchema[]
}

export interface ILowCodeComp {
  icon: React.ReactNode
  text: string
  compKey: DraggableItemKey
}

export interface IHouseCardData {
  image: string
  listingName: string
  cityName: string
  neighborhoodName: string
  squaremeter: number
  tags: string[]
  pricing: number
}

/** store中lowCodeInfo的数据结构 */
export interface ILowCodeInfo {
  JSONSchema: IPageSchema
  scale: number
  curTotalHeight: number
  curSelectCompId: string
  curSelectLayerId: string
  houseCardData: IHouseCardData
}
