// TOMLを読むためのプラグイン
import { NakoSystem } from '../core/src/plugin_api.mjs'
import TOML from 'smol-toml'

const PluginTOML = {
  'meta': {
    type: 'const',
    value: {
      pluginName: 'plugin_toml', // プラグインの名前
      description: 'TOML形式のデータ読み書きするプラグイン', // プラグインの説明
      pluginVersion: '3.6.0', // プラグインのバージョン
      nakoRuntime: ['wnako', 'cnako'], // 対象ランタイム
      nakoVersion: '3.6.0' // 要求なでしこバージョン
    }
  },
  '初期化': {
    type: 'func',
    josi: [],
    pure: true,
    fn: function (sys: NakoSystem) {
    }
  },
  // @TOML
  'TOMLデコード': { // @TOML文字列をオブジェクトにデコードして返す // @TOMLでこーど
    type: 'func',
    josi: [['を', 'の', 'から']],
    pure: true,
    fn: function (s: string, sys: NakoSystem) {
      return TOML.parse(s)
    }
  },
  'TOMLエンコード': { // @オブジェクトをTOML文字列にエンコードする // @TOMLえんこーど
    type: 'func',
    josi: [['を', 'から', 'の']],
    pure: true,
    fn: function (s: object, sys: NakoSystem) {
      return TOML.stringify(s)
    },
    return_none: true
  },
}

export default PluginTOML

if (typeof (navigator.nako3) !== 'undefined') {
  navigator.nako3.addPluginObject('PluginTOML', PluginTOML)
}
