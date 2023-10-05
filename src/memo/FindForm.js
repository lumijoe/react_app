// 各ファイルやコンポーネントのimport
import React, { useState, useEffect, memo } from 'react'
import usePersist from '../Persist'

// コンポーネント関数
// FindForm(ファームを表示)
function FindForm(props) {
    const [memo, setMemo] = usePersist("memo", [])
    const [fmemo, setFMemo] = usePersist("findmemo", [])
    const [message, setMessage] = useState('')
    const [mode, setMode] = usePersist('mode', 'find')
    

    const doChange = (e)=> {
        setMessage(e.target.value)
    }

    const doAction = (e)=> {
        if (message == '') {
            setMode('default')
            return
        }
        let res = memo.filter((item, key)=> {
            return item.message.includes(message)
        })
        setMemo(res)
        setMode('find')
        setMessage('')
    }

    return (
        <form onSubmit={doAction}>
        <div className="form-group row">
            <input type="text" 
                   className="form-control-sm col"
                   onChange={doChange}
                   value={message}
                   required
            />
            <input type="submit" 
                   className="btn btn-primary btn-sm col-2"
                   value="Find"
            />
        </div>
        </form>
    )
}

export default FindForm