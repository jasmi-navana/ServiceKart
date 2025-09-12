USE servicekart;

-- Insert sample users
INSERT INTO users (name, email, password)
VALUES 
('John Doe', 'john@example.com', '$2b$10$abc123FakeHashForUser1'),
('Jane Smith', 'jane@example.com', '$2b$10$abc123FakeHashForUser2');

-- Insert sample agents
INSERT INTO agents (name, email, password, serviceType)
VALUES 
('Mike Electric', 'mike@agents.com', '$2b$10$abc123FakeHashForAgent1', 'Electrician'),
('Lily Clean', 'lily@agents.com', '$2b$10$abc123FakeHashForAgent2', 'Cleaning');

-- Insert sample admin
INSERT INTO admins (email, password)
VALUES 
('admin@servicekart.com', '$2b$10$abc123FakeHashForAdmin');

-- Insert sample bookings
INSERT INTO bookings (userId, agentId, name, address, date, serviceType, status, beforeImage, afterImage)
VALUES 
(1, 1, 'AC Repair', '123 Main St, NY', '2025-06-01', 'Electrician', 'completed', 'before1.jpg', 'after1.jpg'),
(2, 2, 'House Cleaning', '456 Maple Ave, LA', '2025-06-02', 'Cleaning', 'pending', NULL, NULL);

-- Insert sample feedback
INSERT INTO feedback (bookingId, rating, comments)
VALUES 
(1, 5, 'Great service, AC working perfectly now!');
