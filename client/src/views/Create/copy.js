<div>
<label>Difficulty: </label>
<input 
className="inputCreate"
type="text" 
placeholder="Difficulty"
name= 'difficulty'
value= {input.difficulty}
onChange={(e)=> handleChange(e)}
 />
 {
    errors.difficulty && (
        <p>{errors.difficulty}</p>
    )
 }
</div>

