import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

@Module({
  name: 'data',
  stateFactory: true,
  namespaced: true
  // dynamic: true,
})
export default class DataModule extends VuexModule {
  public data: any = {}

  @Mutation
  private setData(payload: any) {
    this.data = payload
  }

  @Action({ commit: 'setData' })
  public async sendGetExperienceRequest() : Promise<any> {
    try {
      const res = await $axios.get('/data.json')
      return res.data
    } catch(e) {
      console.log('Error: ' + e.message)
      return []
    }
  }
}
