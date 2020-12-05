export interface ISelectOptions {
    [key:string]:number[]
}

export interface ITableData {
    aviability: string
    isAvailable: boolean
    location: string
    price_eur: number
    price_usd: number
    price_sgd: number
    price_hkd: number
    id: number
}

export interface ITopInfoData {
    id:string
    name:string
    value:number | string
}