import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31'
});

// Function to upload images to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log('Uploading image:', imageUrl);
    
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');

    const asset = await client.assets.upload('image', imageBuffer, {
      filename: path.basename(imageUrl),
    });

    console.log('Image uploaded successfully:', asset._id);
    return asset._id;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

// Function to import data
async function importData() {
  try {
    console.log('Fetching food and chef data from API...');

    // Fetch food and chef data
    const [$foods, $chefs] = await Promise.all([
      axios.get('https://sanity-nextjs-rouge.vercel.app/api/foods'),
      axios.get('https://sanity-nextjs-rouge.vercel.app/api/chefs')
    ]);

    const foods = $foods.data;
    const chefs = $chefs.data;

    // ✅ Process Foods
    for (const food of foods) {
      console.log(`Processing food: ${food.name}`);

      let imageRef = null;
      if (food.image) {
        imageRef = await uploadImageToSanity(food.image);
      }

      const sanityFood = {
        _type: 'food',
        name: food.name,
        category: food.category || null,
        price: food.price,
        originalPrice: food.originalPrice || null,
        tags: food.tags || [],
        description: food.description || '',
        available: food.available !== undefined ? food.available : true,
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
      };

      try {
        console.log('Uploading food to Sanity:', sanityFood.name);
        const result = await client.create(sanityFood);
        console.log(`Food uploaded successfully: ${result._id}`);
      } catch (error) {
        console.error('Error uploading food:', error);
      }
    }

    // ✅ Process Chefs
    for (const chef of chefs) {
      console.log(`Processing chef: ${chef.name}`);

      let imageRef = null;
      if (chef.image) {
        imageRef = await uploadImageToSanity(chef.image);
      }

      const sanityChef = {
        _type: 'chef',
        name: chef.name,
        bio: chef.bio || '',
        experience: chef.experience || '',
        specialty: chef.specialty || '',
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
      };

      try {
        console.log('Uploading chef to Sanity:', sanityChef.name);
        const result = await client.create(sanityChef);
        console.log(`Chef uploaded successfully: ${result._id}`);
      } catch (error) {
        console.error('Error uploading chef:', error);
      }
    }

    console.log('All data migrated successfully!');
  } catch (error) {
    console.error('Failed to import data:', error);
  }
}

// Run import function
importData();
