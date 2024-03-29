import * as Yup from 'yup';

import { createAddress, getUserAddress} from './address';

export const create = async (req, res) => {

    const { data } = req.body;

    const schema = Yup.object().shape({
        street: Yup.string().required(),
        aptNum: Yup.string(),
        postalCode: Yup.string().min(6).required(),
        city: Yup.string().required(),
        province: Yup.string().required(),
        instructions: Yup.string(),
        geo: Yup.object().shape({
            lng: Yup.string().required(),
            lat: Yup.string().required(),
        })

    })
    try {
        await schema.validate(data);

        const address = await createAddress({...data, 
         postalCode: data.postalCode.replace(/\s/g, ''),
         user: req.user._id,
        });

        res.status(201).json({ address });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
} 

export const getAddress = async (req, res) => {
    try{
        const addresses =  await getUserAddress(req.user._id);
        res.status(201).json({ addresses });
    }catch (error) {
        res.status(400).json({ message: error.message })
    }
}