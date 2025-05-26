import { json } from '@sveltejs/kit';
import pool from '$lib/server/db';

let data = ''

// export async function POST({ request }) {
//   try {
//     const { user_id, course_id, lesson, progress } = await request.json();
//     const query = 'INSERT INTO course_progress (user_id, course_id, lesson, progress) VALUES ($1, $2, $3, $4) RETURNING *';
//     const values = [user_id, course_id, lesson, progress];
//     const data = await db.query(query, values);
//     return json(data.rows[0]);
//   } catch (error) {
//     {
//       return new Response({
//         status: 500,
//         body: { error: 'Database connection error' }
//       });
//   }
// }
// }

export async function GET({ request }) {

  try {
    // const data = await db.query(query);
    data = await pool.query("SELECT * FROM logbook.categories");
    return json(data.rows);
  } catch (error) {
    return new Response({
      status: 500,
      body: { error: 'Database connection error' }
    });
  }
}


