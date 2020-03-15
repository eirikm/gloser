import React, {useState} from 'react';

interface IProps {
    lang1: string;
    lang2: string,
    lang1glose: string;
    submitAction: any;
}

function TestGlose(props: IProps) {
    const {lang1, lang2, lang1glose, submitAction} = props;

    const [glose, setGlose] = useState("");

    function onEnter(event: React.KeyboardEvent<HTMLInputElement>, callback: () => void): void {
        event.key === 'Enter' && callback();
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();

        const element = event.target as HTMLInputElement;
        setGlose(element.value);
    }

    return (
        <div className="TestGlose">
            <table>
                <tbody>
                    <tr>
                        <td>{lang1}</td>
                        <td>{lang2}</td>
                    </tr>
                    <tr>
                        <td>{lang1glose}</td>
                        <td><input type="text"
                                   onChange={handleChange}
                                   onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => onEnter(e, () => submitAction(glose))}
                        /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TestGlose;
