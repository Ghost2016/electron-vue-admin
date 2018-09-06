<template>
  <div>
    <audio controls autoplay ref="audio"></audio>
    <input @click="this.startRecording" type="button" value="录音" />
    <input @click="this.stopRecording" type="button" value="停止" />
    <input @click="this.playRecording" type="button" value="播放" />
    <input @click="this.uploadAudio" type="button" value="提交" />
  </div>
</template>

<script>
// require('../../../../record-example/HZRecorder.js')
require(__static + '/js/HZRecorder.js') // eslint-disable-line
export default {
  data() {
    return {
      recorder: null
    }
  },
  mounted() {
  },
  methods: {
    startRecording() {
      console.log('start')
      window.HZRecorder.get((rec) => {
        this.recorder = rec
        this.recorder.start()
      })
    },
    stopRecording() {
      console.log('stop')
      this.recorder.stop()
    },
    playRecording() {
      console.log('play')
      this.recorder.play(this.$refs.audio)
    },
    uploadAudio() {
      console.log('upload')
      return
      // this.recorder.upload('Handler1.ashx', function(state, e) {
      //   switch (state) {
      //     case 'uploading':
      //       // var percentComplete = Math.round(e.loaded * 100 / e.total) + '%';
      //       break
      //     case 'ok':
      //       alert('上传成功')
      //       break
      //     case 'error':
      //       alert('上传失败')
      //       break
      //     case 'cancel':
      //       alert('上传被取消')
      //       break
      //   }
      // })
    }
  },
  computed: {

  },
  created() {

  }

}
</script>

<style lang="scss" scoped>

</style>
