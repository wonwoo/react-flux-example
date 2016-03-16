/**
 * Created by wonwoo on 2016. 3. 16..
 */

import Dispatcher from '../core/Dispatcher';
import ButtonConstants from '../constants/ButtonConstants';
import { EventEmitter } from 'events';

class ButtonStore extends EventEmitter {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this.index = 0;
    }
    subscribe(actionSubscribe) {
        this._dispatchToken = Dispatcher.register(actionSubscribe());
    }

    emitChange() {
        this.emit('CHANGE');
    }

    addChangeListener(cb) {
        this.on('CHANGE', cb)
    }

    removeChangeListener(cb) {
        this.removeListener('CHANGE', cb);
    }

    _registerToActions(payload) {
        let action = payload.action;
        switch (action.actionType) {
            case ButtonConstants.BUTTON_CONSTANT:
                this.index += action.index;
                break;
            default:
                return true;
        }
        this.emitChange();
        return true;
    }

    getIndex(){
        return this.index;
    }
}

export default new ButtonStore();
