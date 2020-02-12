<template>
  <div class="container">
    <div class="item title">专业技能</div>
    <div id="draw-container"></div>
  </div>
</template>
<script>
import G2 from '@antv/g2';
export default {
  data () {
    return {
      dataArr: [
        { type: 'HTML+CSS', value: 80 },
        { type: 'Js+ES6', value: 80 },
        { type: 'Vue', value: 80 },
        { type: 'Nodejs', value: 60 },
      ]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const chart = new G2.Chart({
        container: 'draw-container',
        forceFit: true,
        height: 400,
        padding: [20, 40, 50, 100]
      });
      chart.source(this.dataArr, {
        value: {
          max: 100,
          min: 0,
          nice: false,
          alias: '掌握程度/100'
        }
      });
      chart.axis('type', {
        label: {
          textStyle: {
            fill: '#8d8d8d',
            fontSize: 14
          }
        },
        tickLine: {
          alignWithLabel: false,
          length: 0
        },
        line: {
          lineWidth: 0
        }
      });
      chart.axis('value', {
        label: null,
        title: {
          offset: 30,
          textStyle: {
            fontSize: 14,
            fontWeight: 400
          }
        }
      });
      chart.legend(false);
      chart.coord().transpose();
      chart.interval().position('type*value').size(26)
        .opacity(1)
        .label('value', {
          textStyle: {
            fill: '#8d8d8d',
            fontSize: 14,
          },
          offset: 10
        });
      chart.render();
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #draw-container {
    width: 100%;
    min-height: 200px;
  }
  .item {
    transition: all 1s;
    opacity: 0;
    &.title {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
}
</style>>
