import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

@Module({
  name: 'data',
  stateFactory: true,
  namespaced: true
  // dynamic: true,
})
export default class DataModule extends VuexModule {
  public permissionList: Array<any> = []

  @Mutation
  setPermissionList(payload: any) {
    this.permissionList = payload
  }

  @Action({ commit: 'setPermissionList' })
  public async getPermissionList({ token }: any) {
    // const requestBody: ProxyRequestObject = {
    //   token,
    //   endpoint: '/Backend/Sys/GetPermissionList',
    //   method: 'post',
    //   data: {
    //     start: 0,
    //     length: 10
    //   }
    // }

    // try {
    //   const result: ResponseObject = await $axios.post('/api', requestBody)
    //   switch (Number(result.data.syscode)) {
    //     case 200:
    //       return result.data.data
    //     default:
    //       throw new Error('Error fetching')
    //   }
    // } catch (e) {
    //   throw new Error(e)
    // }
    return 'Placeholder'
  }
}
