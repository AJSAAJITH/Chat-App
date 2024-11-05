const GenderRadio = ({selectedGender, onGenderChange}) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className='gap-2 cursor-pointer label'>
                    <span className='label-text'>Male</span>
                    <input 
                    type="radio"
                    name="gender" 
                    className="radio-info"
                    checked={selectedGender ==="male"}
                    onChange={()=> onGenderChange('male')}
                     />
                </label>
            </div>
            <div className='form-control'>
                <label className='gap-2 cursor-pointer label'>
                    <span className='label-text'>Female</span>
                    <input 
                    type="radio" 
                    name="gender" 
                    className="radio-info"
                    checked={selectedGender ==="female"}
                    onChange={()=> onGenderChange('female')}
                     />
                </label>
            </div>
        </div>
    );
};



// STARTER CODE FOR THE GENDER RADIO
// const GenderRadio = () => {
// 	return (
// 		<div className='flex'>
// 			<div className='form-control'>
// 				<label className='gap-2 cursor-pointer label'>
// 					<span className='label-text'>Male</span>
// <input type="radio" name="gender" className="radio-info" defaultChecked /> 
// 				</label>
// 			</div>
// 			<div className='form-control'>
// 				<label className='gap-2 cursor-pointer label'>
// 					<span className='label-text'>Female</span>
//  <input type="radio" name="gender" className="radio-info"/>
// 				</label>
// 			</div>
// 		</div>
// 	);
// };

export default GenderRadio;
