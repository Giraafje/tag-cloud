import React, {useState} from 'react';

const TagCloud = () => {
    const [tags, setTags] = useState(['Workout Gear', 'Digital Art', 'Replacement', 'Aria', 'Fitness', 'Wireless', 'iWatch', 'Hike', 'Sportsband'])
    const [newInput, setNewInput] = useState('')

    const handleAdd = (e) => {
        e.preventDefault()
        setTags([...tags, newInput])
    }

    const handleRemove = (e) => {
        e.preventDefault()
        const result = [...tags];
        result.splice(0, 1)
        setTags(result)
    }

    return (
        <>
            <h1 style={{textAlign: 'center'}}>Tag Cloud</h1>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start', marginBottom: '2rem', border: '2px solid black'}}>
                {tags.map((tag) => <div key={tag} style={{padding: '0.5rem', border: '1px solid grey', margin: '0.5rem'}}>{tag}</div>)}
            </div>
            <form onSubmit={handleAdd}>
                <label style={{marginRight: '1rem'}}> Add new tag:
                    <input type="text" name="tagField" value={newInput} onChange={(e) => setNewInput(e.target.value)} style={{marginLeft: '1rem'}}></input>
                </label>
                <button type="submit" style={{backgroundColor: 'green', padding: '0.5rem'}}>+ Add</button>
                <button type="button" onClick={handleRemove} style={{marginTop: '2rem', marginBottom: '2rem', backgroundColor: 'red', padding: '0.5rem'}}>Remove first tag</button>
            </form>
        </>
    )
};

export default TagCloud;