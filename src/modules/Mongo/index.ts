import { Module } from "@nestjs/common";
import { ModelDefinition, MongooseModule } from "@nestjs/mongoose";

@Module({
	imports: [
		MongooseModule.forRoot(process.env.MONGO_URL),
	],
})
export class MongoModule {
	/**
	 * Creates a ModelDefinition from a modelclass and a schema.
	 * 
	 * TODO:
	 * 	find a way to use proper type for the schema argument - mongoose.Schema<T>
	 * 	Tried and proven not working:
	 * 		mongoose.Schema<T>
	 * 		InstanceType<typeof mongoose.Schema<T>>
	 * @param classCtor Model class.
	 * @param schema Model schema instance.
	 * @returns Module importing the specified models.
	 */
	static model<T>(classCtor: new ()=>T, schema: any): ModelDefinition {
		return {
			name: classCtor.name,
			schema,
		};
	}
	
	/**
	 * Imports the specified Mongoose models into the app.
	 * 
	 * @param models A list of model definitions.
	 * @returns Module importing the specified models.
	 */
	static importModels(models: ModelDefinition[]) {
		return MongooseModule.forFeature(models);
	}
}
