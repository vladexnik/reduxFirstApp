// action-creator - чтоб в диспатче писать 
// не {type:'inc'}, а inc()
export const inc=()=>{ return {type:'inc'}}
  
export const dec=() => ({type: 'dec'})

export const rnd=(value) =>({type:'rnd', payload: value})
