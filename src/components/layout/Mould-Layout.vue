<script>
import MouldLayout1 from './Mould-Layout-1'
import MouldLayout2 from './Mould-Layout-2'
import MouldLayout3 from './Mould-Layout-3'
import MouldLayout4 from './Mould-layout-4'
import MouldLayout5 from './Mould-layout-5'

export default {
    comments:{
        MouldLayout1,
        MouldLayout2,
        MouldLayout3,
        MouldLayout4,
        MouldLayout5
    },
    render(){
        return (
            <div>
                {{
                    1: <MouldLayout1 item={this.itemData || {}} itemIndex={this.itemIndex} isSub={this.isSub}/>,
                    2: <MouldLayout2 item={this.itemData || {}} itemIndex={this.itemIndex} isSub={this.isSub}/>,
                    3: <MouldLayout3 item={this.itemData || {}} itemIndex={this.itemIndex} isSub={this.isSub}/>,
                    4: <MouldLayout4 item={this.itemData || {}} itemIndex={this.itemIndex} isSub={this.isSub}/>,
                    5: <MouldLayout5 item={this.itemData || {}} itemIndex={this.itemIndex} isSub={this.isSub}/>,
                    6: {},
                }[this.num]}
            </div>
        );
    },
    props:{
        num: Number,
        itemData: Object,
        itemIndex: Number,
        isSub: Boolean,
    }
}
</script>

<style>

</style>