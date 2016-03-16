/**
 * Created by wonwoo on 2016. 3. 16..
 */

import Dispatcher from '../core/Dispatcher';
import ButtonConstants from '../constants/ButtonConstants';

export default {

    addClick:function(index){
        Dispatcher.handleViewAction({
            actionType: ButtonConstants.BUTTON_CONSTANT,
            index: index
        });
    }
}

