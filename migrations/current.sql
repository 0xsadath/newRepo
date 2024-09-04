-- Sample Migration

drop table if exists vehicle_mileage;
drop table if exists vehicles;
drop table if exists items;

drop type if exists item_status;
create type item_status as enum(
  'CREATED',
  'PURCHASED',
  'DELIVERED',
  'ACCEPTED',
  'INSERVICE',
  'MAINTENANCE',
  'STORAGE',
  'RETIRED',
  'DISPOSED',
  'SOLD'
);
drop type if exists item_type;
create type item_type as enum(
  'VEHICLE'
);

create table items(
  id bigserial primary key,
  manufacturer_serial_no text null,
  internal_serial_no text null,
  purchase_price decimal null,
  purchase_date timestamptz null,
  quantity integer not null default 1,
  status item_status not null default 'CREATED',
  type item_type not null
);

create table vehicles(
  item_id bigserial primary key references items(id),
  chassis_no text null,
  license_no text null,
  name text not null,
  description text null,
  purchase_mileage bigint not null,
  manufacturer text null,
  manufacture_year smallint null,
  manufacture_country text null,
  model text null,
  color text null,
  wheelCount int not null default 4,
  engine_cc int null,
  transmission_type text null,
  fuel_type text null,
  steering_type text null,
  brake_type text null,
  drive_type text null,
  fuel_capacity decimal null,
  fuel_efficiency_km_l decimal null,
  max_passengers integer null,
  max_cargo_kg decimal null,
  max_cargo_cap decimal null,
  ammenities JSONB null
);

create table vehicle_mileages(
  id bigserial primary key,
  vehicle_id bigint references vehicles(item_id) on delete cascade,
  mileage integer not null,
  record_date timestamptz not null default now()
)

