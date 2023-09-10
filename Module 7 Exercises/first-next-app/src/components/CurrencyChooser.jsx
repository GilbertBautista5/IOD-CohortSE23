'use client';

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function CurrencyChooser({defaultCurrency}) {

    const [currency, setCurrency] = useState(defaultCurrency);
    const router = useRouter(); 
    const path = usePathname(); 

    const handleChange = (e) => {
        setCurrency(e.target.value);
        router.replace(path + '?currency=' + e.target.value) 
        
    }

    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>)

    return (
        <div className="CurrencyChooser componentBox">
            <label>Choose currency:
                <select value={currency} onChange={handleChange}>
                    {options}
                </select>
            </label>
        </div>
    )

}

export default CurrencyChooser;