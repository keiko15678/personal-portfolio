import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import DataModule from '~/store/data'

let dataStore: DataModule

function initialiseStores(store: Store<any>): void {
  dataStore = getModule(DataModule, store)
}

export { initialiseStores, dataStore }