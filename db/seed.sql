DROP TABLE IF EXISTS blog_posts CASCADE;

CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  author VARCHAR,
  title VARCHAR(255),
  content VARCHAR(255),
  image TEXT
);

INSERT INTO blog_posts 
(author, title, content, image) 
VALUES
('Leigh Weingus', '1st Blog Post', 'SHIT, consectetur adipisicing elit. Quidem soluta explicabo, quibusdam nobis, odio repellendus veritatis reiciendis consequatur esse numquam incidunt, iure, inventore unde perferendis deserunt ratione at. Aliquam, molestias.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Soup_Spoon.jpg/220px-Soup_Spoon.jpg'),
('Leigh Weingus', '2nd Blog Post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem soluta explicabo, quibusdam nobis, odio repellendus veritatis reiciendis consequatur esse numquam incidunt, iure, inventore unde perferendis deserunt ratione at. Aliquam, molestias.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Soup_Spoon.jpg/220px-Soup_Spoon.jpg'),
('Leigh Weingus', '3rd Blog Post', 'SHIT, consectetur adipisicing elit. Quidem soluta explicabo, quibusdam nobis, odio repellendus veritatis reiciendis consequatur esse numquam incidunt, iure, inventore unde perferendis deserunt ratione at. Aliquam, molestias.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Soup_Spoon.jpg/220px-Soup_Spoon.jpg');