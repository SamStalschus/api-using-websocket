import { EntityRepository, Repository } from "typeorm";

import { Connection } from "../entities/Connnection";

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> {

}

export { ConnectionsRepository }