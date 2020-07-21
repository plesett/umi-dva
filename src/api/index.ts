import { http } from '@/utiles/request'

export async function GetIndex() {
    return await http('/api/users', {
        method: "GET"
    })
}