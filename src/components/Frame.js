import React, { useState, useEffect } from 'react'
import TableData from './TableData'
import Detail from './Detail'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Frame() {
    const [tableData, setData] = useState([])
    const [detData, setDetData] = useState([])
    const [selected, setSelected] = useState({})

    useEffect(() => {
        async function fetchData() {
            const url = 'https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json'
            const res = await (await fetch(url)).json()
            let dData = []
            let redData = []
            redData = res.map(d => {
                let newObj = {}
                newObj["description"] = d["description"]
                newObj["cast"] = d["cast"]
                newObj["poster"] = d["poster"]
                newObj["name"] = d["name"]
                delete d["description"]
                delete d["cast"]
                delete d["poster"]
                dData.push(newObj)
                return d
            })
            setDetData(dData.slice())
            setData(redData.slice())
        }
        fetchData()
    }, [])

    function setDetail(i) {
        setSelected(detData[i])
    }

    function render() {
        if (tableData.length > 0) {
            if (Object.keys(selected).length > 0) {
                return (
                    <Container>
                    <Row>
                        <Col>
                            <TableData
                                data={tableData}
                                handleClick={setDetail}
                            />
                        </Col>
                        <Col>
                            <Detail
                                film={selected}
                            />
                        </Col>
                    </Row>
                    </Container>
                )
            } else {
                return (
                    <TableData
                        data={tableData}
                        handleClick={setDetail}
                    />
                )
            }
        } else {
            return (
                <div>
                </div>
            )
        }
    }

    return render()
}

export default Frame