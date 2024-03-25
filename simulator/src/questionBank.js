import {validate,runAll} from './testbench'
import { changeClockEnable } from './sequential';

let question={
    heading:"Heading1",
    statement:"problem Statement description",
    group:"Adder",
    difficulty:"easy",
    testdata: {
        "type": "comb",
        "title": "Untitled",
        "groups": [
            {
                "label": "Group 1",
                "inputs": [
                    {
                        "label": "inp1",
                        "bitWidth": 1,
                        "values": [
                            "0",
                            "1"
                        ]
                    },
                    {
                        "label": "inp2",
                        "bitWidth": 1,
                        "values": [
                            "0",
                            "1"
                        ]
                    }
                ],
                "outputs": [
                    {
                        "label": "out1",
                        "bitWidth": 1,
                        "values": [
                            "0",
                            "1"
                        ]
                    }
                ],
                "n": 2
            },
            {
                "label": "Group 2",
                "inputs": [
                    {
                        "label": "inp1",
                        "bitWidth": 1,
                        "values": [
                            "1",
                            "0"
                        ]
                    },
                    {
                        "label": "inp2",
                        "bitWidth": 1,
                        "values": [
                            "0",
                            "1"
                        ]
                    }
                ],
                "outputs": [
                    {
                        "label": "out1",
                        "bitWidth": 1,
                        "values": [
                            "0",
                            "0"
                        ]
                    }
                ],
                "n": 2
            }
        ]
    }
}

export function testResult(){
    const isValid = validate(question.testdata, globalScope);
    const results = runAll(question.testdata, globalScope);
    const { passed } = results.summary;
    const { total } = results.summary;
    const resultString = JSON.stringify(results.detailed);
    alert(`${passed} out of ${total}`)
}



