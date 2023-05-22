
import httpInstance from "@/utils/http";

export function getcategory(){
    return httpInstance({
        url: 'home/category/head'
    })
}