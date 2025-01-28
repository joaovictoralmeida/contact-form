export default function InputRadio({label, type, name, value, checked, onChange}) {

    return (
        <div className="flex gap-2">
            <label className="flex items-center gap-2 border border-[#87a3a6] rounded-md pl-2 h-12 w-[300px] hover:border-[#0c7d69] md:w-full">
                <input required type={type} name={name} value={value} checked={checked} onChange={onChange}/>{label}
            </label>
            
        </div>
    )
}